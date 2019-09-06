const channels = require('biot-core/channels');
const eventBus = require('ocore/event_bus');
const core = require('biot-core');
const db = require('ocore/db');

core.init('test').then(async () => {
	eventBus.emit('biot_ok');
	let wallets = await core.getWallets();
	console.error('----- my address', (await core.getAddressesInWallet(wallets[0]))[0]);
});

channels.setCallBackForPaymentReceived(async (amount, asset, message, aa_address, handle) => {
	console.error('new payment', asset, amount);
	return handle(null, 'ok');
});