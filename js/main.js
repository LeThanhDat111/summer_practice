const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const cong = document.getElementById('cong');
const tru = document.getElementById('tru');
const nhan = document.getElementById('nhan');
const chia = document.getElementById('chia');

function show() {
	menu.classList.toggle('show_item');
}
btn.addEventListener('click', show);
cong.addEventListener('click', show);
tru.addEventListener('click', show);
nhan.addEventListener('click', show);
chia.addEventListener('click', show);

document.addEventListener('click', function (e) {
	if (!btn.contains(e.target) && !menu.contains(e.target)) show();
});
