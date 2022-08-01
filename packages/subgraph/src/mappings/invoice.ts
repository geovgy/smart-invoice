import { log, Bytes, ipfs, json, Value } from '@graphprotocol/graph-ts';
import {
  Invoice,
  Release,
  Withdraw,
  Dispute,
  Resolution,
  Deposit,
  Verified,
  MilestonesAdded,
  DetailsUpdated,
  Agreement,
} from '../types/schema';

import {
  Release as ReleaseEvent,
  Withdraw as WithdrawEvent,
  Lock as LockEvent,
  Resolve as ResolveEvent,
  Rule as RuleEvent,
  Deposit as DepositEvent,
  Verified as VerifiedEvent,
  MilestonesAdded as MilestonesAddedEvent,
  DetailsUpdated as DetailsUpdatedEvent,
} from '../types/templates/SmartInvoice/SmartInvoice';
import { addQm, updateInvoiceInfo } from './helpers';

export function handleDetailsUpdated(event: DetailsUpdatedEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    log.info('handleDetailsUpdated {}', [event.address.toHexString()]);
    invoice = updateInvoiceInfo(event.address, invoice);

    let newDetails = new DetailsUpdated(event.logIndex.toHexString());
    newDetails.sender = event.params.sender;
    newDetails.details = event.params.details;
    newDetails.save();

    // get agreement out of details

    if (newDetails.details.value.length == 32) {
      let hexHash = changetype<Bytes>(addQm(newDetails.details));
      let base58Hash = hexHash.toBase58();
      invoice.ipfsHash = base58Hash.toString();
      let ipfsData = ipfs.cat(base58Hash);

      if (ipfsData !== null) {
        log.info('IPFS details from hash {}, data {}', [
          base58Hash,
          ipfsData.toString(),
        ]);
        let data = json.fromBytes(ipfsData).toObject();
        let projectAgreement = data.get('projectAgreement');
        if (projectAgreement != null && !projectAgreement.isNull()) {
          let obj = projectAgreement.toObject();
          let type = obj.get('type');
          let src = obj.get('src');
          if (type && src != null) {
            log.info('projectAgreement check: obj.type {}, obj.src {}', [
              type.toString(),
              src.toString(),
            ]);
            let typeValue = type.toString();
            let srcValue = src.toString();

            log.info('final: src1 {}, type2 {}', [
              invoice.projectAgreement.src,
              invoice.projectAgreement.type,
            ]);
          }
        }
      }
    }

    let verified = invoice.verified;
    verified.push(verification.id);
    invoice.verified = verified;
    invoice.save();
  }
}

export function handleMilestonesAdded(event: MilestonesAddedEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    log.info('handleMilestonesAdded {}', [event.address.toHexString()]);
    invoice = updateInvoiceInfo(event.address, invoice);

    let addition = new MilestonesAdded(event.logIndex.toHexString());
    addition.sender = event.params.sender;
    addition.invoice = event.params.invoice;
    addition.milestones = event.params.milestones;

    addition.save();

    let invoiceAmounts = invoice.amounts;

    let newEventMilestones = addition.milestones;
    let newAmounts = invoiceAmounts.concat(newEventMilestones);

    let milestonesAdded = invoice.milestonesAdded;
    milestonesAdded.push(addition.id);

    let invoiceTotal = invoice.total;
    for (let i = 0; i < newAmounts.length; i++) {
      invoiceTotal.plus(newAmounts[i]);
    }

    invoice.total = invoiceTotal;
    invoice.numMilestones += newEventMilestones.length;
    invoice.amounts = newAmounts;
    invoice.milestonesAdded = milestonesAdded;

    invoice.save();
  }
}

export function handleVerified(event: VerifiedEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    log.info('handleVerified {}', [event.address.toHexString()]);
    invoice = updateInvoiceInfo(event.address, invoice);

    let verification = new Verified(event.logIndex.toHexString());
    verification.client = event.params.client;
    verification.invoice = event.params.invoice;

    verification.save();

    let verified = invoice.verified;
    verified.push(verification.id);
    invoice.verified = verified;
    invoice.save();
  }
}

export function handleRelease(event: ReleaseEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    log.info('handleRelease {}', [event.address.toHexString()]);
    invoice = updateInvoiceInfo(event.address, invoice);

    let release = new Release(event.logIndex.toHexString());
    release.txHash = event.transaction.hash;
    release.invoice = invoice.id;
    release.milestone = event.params.milestone;
    release.amount = event.params.amount;
    release.timestamp = event.block.timestamp;
    release.save();

    let releases = invoice.releases;
    releases.push(release.id);
    invoice.releases = releases;
    invoice.save();
  }
}

export function handleWithdraw(event: WithdrawEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    invoice = updateInvoiceInfo(event.address, invoice);

    let withdraw = new Withdraw(event.logIndex.toHexString());
    withdraw.txHash = event.transaction.hash;
    withdraw.invoice = invoice.id;
    withdraw.amount = event.params.balance;
    withdraw.timestamp = event.block.timestamp;
    withdraw.save();

    let withdraws = invoice.withdraws;
    withdraws.push(withdraw.id);
    invoice.withdraws = withdraws;
    invoice.save();
  }
}

export function handleLock(event: LockEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    invoice = updateInvoiceInfo(event.address, invoice);

    let dispute = new Dispute(event.logIndex.toHexString());
    dispute.txHash = event.transaction.hash;

    dispute.invoice = event.address.toHexString();
    dispute.sender = event.params.sender;
    dispute.details = event.params.details;
    let hexHash = changetype<Bytes>(addQm(dispute.details));
    let base58Hash = hexHash.toBase58();
    dispute.ipfsHash = base58Hash.toString();
    dispute.timestamp = event.block.timestamp;
    dispute.save();

    let disputes = invoice.disputes;
    disputes.push(dispute.id);
    invoice.disputes = disputes;
    invoice.save();
  }
}

export function handleResolve(event: ResolveEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    invoice = updateInvoiceInfo(event.address, invoice);

    let resolution = new Resolution(event.logIndex.toHexString());
    resolution.txHash = event.transaction.hash;
    resolution.details = event.params.details;
    let hexHash = changetype<Bytes>(addQm(resolution.details));
    let base58Hash = hexHash.toBase58();
    resolution.ipfsHash = base58Hash.toString();
    resolution.resolverType = invoice.resolverType;
    resolution.resolver = invoice.resolver;
    resolution.invoice = invoice.id;
    resolution.clientAward = event.params.clientAward;
    resolution.providerAward = event.params.providerAward;
    resolution.resolutionFee = event.params.resolutionFee;
    resolution.resolutionDetails = event.params.details;
    resolution.timestamp = event.block.timestamp;
    resolution.save();

    let resolutions = invoice.resolutions;
    resolutions.push(resolution.id);
    invoice.resolutions = resolutions;
    invoice.save();
  }
}

export function handleDeposit(event: DepositEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    invoice = updateInvoiceInfo(event.address, invoice);

    let deposit = new Deposit(event.logIndex.toHexString());
    deposit.txHash = event.transaction.hash;
    deposit.invoice = invoice.id;
    deposit.sender = event.params.sender;
    deposit.amount = event.params.amount;
    deposit.timestamp = event.block.timestamp;
    deposit.save();

    let deposits = invoice.deposits;
    deposits.push(deposit.id);
    invoice.deposits = deposits;
    invoice.save();
  }
}

export function handleRule(event: RuleEvent): void {
  let invoice = Invoice.load(event.address.toHexString());
  if (invoice != null) {
    invoice = updateInvoiceInfo(event.address, invoice);

    let resolution = new Resolution(event.logIndex.toHexString());
    resolution.txHash = event.transaction.hash;
    let hexHash = changetype<Bytes>(addQm(resolution.details));
    let base58Hash = hexHash.toBase58();
    resolution.ipfsHash = base58Hash.toString();
    resolution.resolverType = invoice.resolverType;
    resolution.resolver = invoice.resolver;
    resolution.invoice = invoice.id;
    resolution.clientAward = event.params.clientAward;
    resolution.providerAward = event.params.providerAward;
    resolution.timestamp = event.block.timestamp;
    resolution.ruling = event.params.ruling;
    resolution.save();

    let resolutions = invoice.resolutions;
    resolutions.push(resolution.id);
    invoice.resolutions = resolutions;
    invoice.save();
  }
}
