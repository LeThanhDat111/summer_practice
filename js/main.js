const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const cong = document.getElementById('cong');
const tru = document.getElementById('tru');
const nhan = document.getElementById('nhan');
const chia = document.getElementById('chia');
let Number_a = document.getElementById('Num_a');
let Number_b = document.getElementById('Num_b');
let phep_tinh = document.getElementById('phep_tinh');
const err_a = document.getElementById('err_a');
const err_b = document.getElementById('err_b');
let kq = document.getElementById('finally');

function show() {
	menu.classList.toggle('show_item');
}
btn.addEventListener('click', show);
cong.addEventListener('click', () => showPhepTinh('Cong'));
tru.addEventListener('click', () => showPhepTinh('Tru'));
nhan.addEventListener('click', () => showPhepTinh('Nhan'));
chia.addEventListener('click', () => showPhepTinh('Chia'));

document.addEventListener('click', function (e) {
	if (!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('show_item');
});

function CongFun(Number_a, Number_b) {
	return Number_a + Number_b;
}

function NhanFun(Number_a, Number_b) {
	return Number_a * Number_b;
}

function TruFun(Number_a, Number_b) {
	return Number_a - Number_b;
}

function ChiaFun(Number_a, Number_b) {
	return Number_a / Number_b;
}

function showPhepTinh(phepTinh) {
	if (phepTinh == 'Cong') {
		phep_tinh.textContent = '+';
	} else if (phepTinh == 'Tru') {
		phep_tinh.textContent = '-';
	} else if (phepTinh == 'Nhan') {
		phep_tinh.textContent = 'x';
	} else if (phepTinh == 'Chia') {
		phep_tinh.textContent = ':';
	}
	menu.classList.remove('show_item');
}

function tinh(Number_a, Number_b) {
	if (phep_tinh.textContent == '+') {
		return CongFun(Number_a, Number_b);
	} else if (phep_tinh.textContent == '-') {
		return TruFun(Number_a, Number_b);
	} else if (phep_tinh.textContent == 'x') {
		return NhanFun(Number_a, Number_b);
	} else if (phep_tinh.textContent == ':') {
		return ChiaFun(Number_a, Number_b);
	}
}

document.addEventListener('keydown', function (e) {
	if (e.key == 'Enter') {
		let a = Number(Number_a.value);
		let b = Number(Number_b.value);
		if (Number.isNaN(a)) {
			err_a.textContent = 'Số a không hợp lệ!';
		}
		if (Number.isNaN(b)) {
			err_b.textContent = 'Số b không hợp lệ!';
		}
		kq.value = tinh(a, b);
	}
});
