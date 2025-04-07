// Кнопка Help скртыие, открытие. Динамическое позиционирование

function toggleTooltip(helpElement) {
    const tooltip = helpElement.querySelector('.tooltip');
    helpElement.classList.toggle('active');
    const helpRect = helpElement.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    if (helpElement.classList.contains('active')) {
        if (helpRect.right + tooltipRect.width > window.innerWidth) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '110%';
        } else {
            tooltip.style.left = '110%';
            tooltip.style.right = 'auto';
        }
    } else {
        tooltip.style.left = '';
        tooltip.style.right = '';
    }
};

document.addEventListener('click', (event) => {
    const helpElement = event.target.closest('.calc__help');

    if (helpElement) {
        toggleTooltip(helpElement);
    } else {
        document.querySelectorAll('.calc__help.active').forEach(activeHelp => {
            activeHelp.classList.remove('active');
            const tooltip = activeHelp.querySelector('.tooltip');
            tooltip.style.left = '';
            tooltip.style.right = '';
        });
    }

});

// Чекбокс галочки
// Вариофокал
const calcCheck = document.querySelector('.calc__check');
calcCheck.addEventListener('click', () => {
    calcCheck.classList.toggle('button__check')
    calculateCost()
})

// Галочки по умолчанию на первом варианте
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wrapper__calc__check').forEach(wrapper => {
        const firstCheck = wrapper.querySelector('.calc__check__three:first-child');
        if (firstCheck) {
            firstCheck.classList.add('button__check');
        }
    })
})

// Выбор из трех галочек
document.querySelectorAll('.wrapper__calc__check').forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('calc__check__three')) {
            wrapper.querySelectorAll('.calc__check__three').forEach(check => {
                check.classList.remove('button__check');
            });
            event.target.classList.add('button__check');
            calculateCost();
        }
    });
});

// Сохранение выбора галочек в объект
const storageData = {
    quality: {
        FHD: {
            price: 0,
            dataPerDay: 34
        },
        '2K': {
            price: 4500,
            dataPerDay: 48
        },
        '4K': {
            price: 9000,
            dataPerDay: 100
        }
    },
    recorders: {
        4: {
            price: 10500,
            disks: 1
        },
        8: {
            price: 15000,
            disks: 1
        },
        16: {
            price: 21000,
            disks: 2
        },
        32: {
            price: 43000,
            disks: 2
        }
    },
    hdd: {
        1000: 6000,
        2000: 9600,
        4000: 11000,
        6000: 17000,
        8000: 25000,
        10000: 36000
    }    
};

// Синхронизация ползунков и цифр в окошках ввода

let inputValues = {};

document.addEventListener("DOMContentLoaded", function () {
    function syncInputWithRange(inputId, rangeId) {
        const input = document.getElementById(inputId);
        const range = document.getElementById(rangeId);

        if (input && range) {
            input.addEventListener("input", function () {
                range.value = this.value;
                inputValues[input.id] = Number(this.value); //Обновление inputValues
                calculateCost();
            });

            range.addEventListener("input", function () {
                input.value = this.value;
                inputValues[input.id] = Number(this.value); //Обновление inputValues
                calculateCost();
            });
        }
    }

    syncInputWithRange("cameraInput", "cameraRange");
    syncInputWithRange("cableInputOut", "cableMetrOut");
    syncInputWithRange("cableInputIn", "cableMetrIn");

    // Сбор значений
    const inputs = document.querySelectorAll('input[type="number"], input[type="range"]');
    inputs.forEach(input => {
        inputValues[input.id] = Number(input.value);
    });

    // Обновление стоимости в реальном времени
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            inputValues[input.id] = Number(input.value);
            calculateCost();
        });
    });
    calculateCost();
});

// Рассчет стоимости

function calculateCost() {

    // Стоимость с учутом сложности монтажа
    const selectedMontage = document.querySelector('.wrapper__calc__check[data-category="montage"] .button__check')
    const montageOption = selectedMontage ? selectedMontage.getAttribute('data-option') : 'standard';
    
    let montageMultiplier = 1.0; // Стандартный монтаж
    if (montageOption === 'medium') montageMultiplier = 1.20; // +20% к стоимости
    if (montageOption === 'hard') montageMultiplier = 1.30; // +30% к стоимости

    // Базовая стоимость камеры и кабеля
    const cameraCost = inputValues['cameraInput'] * 6000;    
    const cableOutCost = inputValues['cableInputOut'] * 100;
    const cableInCost = inputValues['cableInputIn'] * 80;

    // Стоимость вариофокального объектива
    const variofocalCheck = document.querySelector('.calc__check')
    let variofocalCost = 0;
    
    if (variofocalCheck.classList.contains('button__check')) {
        variofocalCost = inputValues['cameraInput'] * 4000;
    }

    // Качество изображения
    const qualityCheck = document.querySelector('.wrapper__calc__check[data-category="quality"] .button__check')
    let qualityCost = 0;
    let dataPerCameraPerDay = 0;
    
    if (qualityCheck) {        
        const option = qualityCheck.getAttribute('data-option');
        qualityCost = storageData.quality[option].price * inputValues['cameraInput'];
        dataPerCameraPerDay = storageData.quality[option].dataPerDay;
    }

    // Время хранения видео
    const timeCheck = document.querySelector('.wrapper__calc__check[data-category="time"] .button__check');
    const sdCartCost = inputValues['cameraInput'] < 4 ? inputValues['cameraInput'] * 2000 : 0;
    let hddCost = 0;
    let recorderCost = 0;

        console.log("Стоимсоть камеры", cameraCost);
        console.log("Стоимсоть SD карты", sdCartCost)
        console.log("Камеры:", inputValues['cameraInput']);
        console.log("Кабель (улица):", inputValues['cableInputOut']);
        console.log("Кабель (помещение):", inputValues['cableInputIn']);
        console.log("Вариофокальный объектив:", variofocalCost);
        console.log("Качество изображения:", qualityCost);
        console.log("Жёсткий диск:", hddCost);
        console.log("Регистратор:", recorderCost);
    
    if (inputValues['cameraInput'] >= 4 && timeCheck) {        
        const option = timeCheck.getAttribute('data-option');

        // Время хранения в днях 
        const storageDays = {
            '7 дней': 7,
            '14 дней': 14,
            'месяц': 30
        }[option];

        if (!qualityCheck) {
            console.error("Галочка качества изображения не выбрана!");           
        }

        if (storageDays === undefined) {
            console.error("Некорректное значение времени хранения:", option);
            return; // Прекращаем выполнение функции, чтобы избежать ошибок
        }

        console.log("dataPerCameraPerDay:", dataPerCameraPerDay);
        console.log("storageDays:", storageDays);

        // Рассчет ёмкости HDD
        const hddCapacity = inputValues['cameraInput'] * dataPerCameraPerDay * storageDays;
        console.log("storageDays:", storageDays);
        // Выбор регистратора
        const recorderChannels = Object.keys(storageData.recorders).map(Number).sort((a, b) => a - b);
        const selectedRecorder = recorderChannels.find(channels => channels >= inputValues['cameraInput']) || recorderChannels[recorderChannels.length - 1];
        recorderCost = storageData.recorders[selectedRecorder].price

        // Получаем кол-во дисков, поддерживаемых регистратором
        const disksSupported = storageData.recorders[selectedRecorder].disks

        // Выбор жёстких дисков (Доступные HDD)
        const hddOptions = Object.keys(storageData.hdd).map(Number).sort((a, b) => a - b);

        let selectedHdds = [];

        if (disksSupported === 1) {
            const selectedHdd = hddOptions.find(capacity => capacity >= hddCapacity) || hddOptions[hddOptions.length - 1];
            selectedHdds.push(selectedHdd);
        } else if (disksSupported === 2) {
            let remainingCapacity = hddCapacity;
            while (remainingCapacity > 0 && hddOptions.length > 0) {

                if (remainingCapacity <= 0) {
                    break;
                }

                const selectedHdd = hddOptions.find(capacity => capacity >= remainingCapacity) || hddOptions[hddOptions.length - 1];
                selectedHdds.push(selectedHdd);
                remainingCapacity -= selectedHdd;

                // Если ёмкость диска меньше, чем remainingCapacity, завершаем цикл
                if (selectedHdd < remainingCapacity) {
                    break;
                }
            }
        };


        // Рассчитываем стоимость жёстких дисков
        hddCost = selectedHdds.reduce((total, hdd) => total + storageData.hdd[hdd], 0)
        
        


        console.log("Монтаж:", montageOption)
        console.log(hddCapacity)
        console.log("Камеры:", inputValues['cameraInput']);
        console.log("Кабель (улица):", inputValues['cableInputOut']);
        console.log("Кабель (помещение):", inputValues['cableInputIn']);
        console.log("Вариофокальный объектив:", variofocalCost);
        console.log("Качество изображения:", qualityCost);
        console.log("Жёсткий диск:", hddCost);
        console.log("Регистратор:", recorderCost);
    }   
    

    // Рассчет надбавки за сложность монтажа
    const baseCost = cableOutCost + cableInCost + cameraCost + variofocalCost + qualityCost + sdCartCost + hddCost + recorderCost;
    
    // Стоимость с учётом сложности монтажа
    const totalCost = Math.round(baseCost * montageMultiplier);

    document.querySelector('#sum').textContent = `от ${totalCost.toLocaleString()} ₽`;

}

