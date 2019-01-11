// global variables
let sidebar = false;


function openSideBar() {
    let menuBars = document.getElementsByClassName('fa-bars')[0];
    let sidebarContent = document.getElementsByClassName('sidebar-content')[0];
    if (sidebar) {
        sidebarContent.className = 'animated slideInLeft sidebar-content h-max rounded border-right border-secondary';
        menuBars.className = 'fa fa-bars text-white mt-3 rounded';
        sidebar = false;
    } else {
        initSideBarClass = sidebarContent.className;
        sidebarContent.className += ' sidebar-open'
        menuBars.className += 'd-none';
        sidebar = true
    }
}




const monthHash = {
    0: 'January',
    1: 'Febuary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

function daysInMonth(year, month, day) {
    const date = new Date(year, month, day);
    const data = {
        monthName: monthHash[month],
        weekBegin: date.getDay(),
        noOfDays: new Date(year, month + 1, 0).getDate(),

    }
    return data;
}

(function todayDate() {
    const _todayDate = document.getElementsByClassName('todayDate')[0];
    const date = new Date()
    _todayDate.innerHTML = `Today ${date.getDate()}, ${monthHash[date.getMonth()]}, ${date.getFullYear()}`
})()

function populateDates(data) {

    const templateData = {
        monthName: '',
        td: {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
            11: '',
            12: '',
            13: '',
            14: '',
            15: '',
            16: '',
            17: '',
            18: '',
            19: '',
            20: '',
            21: '',
            22: '',
            23: '',
            24: '',
            25: '',
            26: '',
            27: '',
            28: '',
            29: '',
            30: '',
            31: '',
            32: '',
            33: '',
            34: '',
            35: '',
            36: '',
            37: '',
            38: '',
            39: '',
            40: ''
        }
    }
    templateData.monthName = data.monthName
    for (let i = 1; i <= data.noOfDays; i++) {
        // document.getElementsByTagName('td')[data.weekBegin + i - 1].innerHTML = i
        templateData.td[data.weekBegin + i - 1] = i

    }
    const template = `
<div class="col-12 col-lg-6  mt-3 pl-1" style="overflow: hidden;">
                    <div class="border rounded pt-1">
                        <p class="month-name text-primary ml-3 h3">${templateData.monthName}</p>
                        <table class="table text-center mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Sun</th>
                                    <th scope="col">Mon</th>
                                    <th scope="col">Tue</th>
                                    <th scope="col">Wed</th>
                                    <th scope="col">Thu</th>
                                    <th scope="col">Fri</th>
                                    <th scope="col">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="week">
                                    <td>${templateData.td[0]}</td>
                                    <td>${templateData.td[1]}</td>
                                    <td>${templateData.td[2]}</td>
                                    <td>${templateData.td[3]}</td>
                                    <td>${templateData.td[4]}</td>
                                    <td>${templateData.td[5]}</td>
                                    <td>${templateData.td[6]}</td>
                                </tr>
                                <tr class="week">
                                    <td>${templateData.td[7]}</td>
                                    <td>${templateData.td[8]}</td>
                                    <td>${templateData.td[9]}</td>
                                    <td>${templateData.td[10]}</td>
                                    <td>${templateData.td[11]}</td>
                                    <td>${templateData.td[12]}</td>
                                    <td>${templateData.td[13]}</td>
                                </tr>
                                <tr class="week">
                                    <td>${templateData.td[14]}</td>
                                    <td>${templateData.td[15]}</td>
                                    <td>${templateData.td[16]}</td>
                                    <td>${templateData.td[17]}</td>
                                    <td>${templateData.td[18]}</td>
                                    <td>${templateData.td[19]}</td>
                                    <td>${templateData.td[20]}</td>
                                </tr>
                                <tr class="week">
                                    <td>${templateData.td[21]}</td>
                                    <td>${templateData.td[22]}</td>
                                    <td>${templateData.td[23]}</td>
                                    <td>${templateData.td[24]}</td>
                                    <td>${templateData.td[25]}</td>
                                    <td>${templateData.td[26]}</td>
                                    <td>${templateData.td[27]}</td>
                                </tr>
                                <tr class="week">
                                    <td>${templateData.td[28]}</td>
                                    <td>${templateData.td[29]}</td>
                                    <td>${templateData.td[30]}</td>
                                    <td>${templateData.td[31]}</td>
                                    <td>${templateData.td[32]}</td>
                                    <td>${templateData.td[33]}</td>
                                    <td>${templateData.td[34]}</td>
                                </tr>
                                <tr class="week">
                                    <td>${templateData.td[35]}</td>
                                    <td>${templateData.td[36]}</td>
                                    <td>${templateData.td[37]}</td>
                                    <td>${templateData.td[38]}</td>
                                    <td>${templateData.td[39]}</td>
                                    <td>${templateData.td[40]}</td>
                                    <td></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>`
    const month_row = document.getElementsByClassName('month-row')[0];


    month_row.innerHTML += template;

}
for (let i = 0; i < 12; i++) {
    populateDates(daysInMonth(2019, i, 1));
}

// 8 march 2019
function setColor(month, day, year, type) {
    const tempDate = new Date(year, month, 1).getDay() - 1;
    const g = (month * 42) + day + tempDate;
    if (type == 'v') {
        document.getElementsByTagName('td')[g].className += ' vat';
    } else if (type == 'p') {
        document.getElementsByTagName('td')[g].className = ' paye';
    } else if (type == 'reset') {
        document.getElementsByTagName('td')[g].className = ' ';
    } else if (type == 'y') {
        document.getElementsByTagName('td')[g].className += ' yearend';
    } else {
        document.getElementsByTagName('td')[g].className += ' normal';
    }

}

const importantDates = [
    {
        name: 'New Year\'s Day',
        type: 'n',
        day: 1,
        month: 0,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 0,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 0,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 1,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 1,
        year: 2019
    },
    {
        name: 'Women\'s Day',
        type: 'n',
        day: 8,
        month: 2,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 2,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 2,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 3,
        year: 2019
    },
    {
        name: 'Good Friday',
        type: 'n',
        day: 19,
        month: 3,
        year: 2019
    },
    {
        name: 'Holy saturday',
        type: 'n',
        day: 20,
        month: 3,
        year: 2019
    },
    {
        name: 'Easter Day',
        type: 'n',
        day: 21,
        month: 3,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 3,
        year: 2019
    },
    {
        name: 'Easter Monday',
        type: 'n',
        day: 22,
        month: 3,
        year: 2019
    },
    {
        name: 'Worker\'s Day',
        type: 'n',
        day: 1,
        month: 4,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 4,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 4,
        year: 2019
    },
    {
        name: 'Children\'s Day',
        type: 'n',
        day: 27,
        month: 4,
        year: 2019
    },

    {
        name: 'Id el Fitr',
        type: 'n',
        day: 5,
        month: 5,
        year: 2019
    },
    {
        name: 'Id el Fitr Additional Holiday',
        type: 'n',
        day: 6,
        month: 5,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 5,
        year: 2019
    },
    {
        name: 'Democracy Day',
        type: 'n',
        day: 12,
        month: 5,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 5,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 6,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 6,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 7,
        year: 2019
    },
    {
        name: 'Id el Kabir',
        type: 'n',
        day: 12,
        month: 7,
        year: 2019
    },
    {
        name: 'Id el Kabir additional holiday',
        type: 'n',
        day: 13,
        month: 7,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 7,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 8,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 8,
        year: 2019
    },
    {
        name: 'National Day',
        type: 'n',
        day: 1,
        month: 9,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 9,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 9,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 10,
        year: 2019
    },
    {
        name: 'Id el Maulud',
        type: 'n',
        day: 10,
        month: 10,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 10,
        year: 2019
    },
    {
        name: 'DUE DATE FOR PAY AS YOU EARN (PAYE) REMITTANCE FOR THE PREVIOUS MONTH',
        type: 'p',
        day: 10,
        month: 11,
        year: 2019
    },

    {
        name: 'Christmas Eve',
        type: 'n',
        day: 24,
        month: 11,
        year: 2019
    },
    {
        name: 'DUE DATE FOR FILING VALUE ADDED TAX (VAT)& WITHHOLDING TAX (WHT) RETURNS FOR THE PREVIOUS MONTH.',
        type: 'v',
        day: 21,
        month: 11,
        year: 2019
    },

    {
        name: 'Christmas Day',
        type: 'n',
        day: 25,
        month: 11,
        year: 2019
    },
    {
        name: 'Boxing Day',
        type: 'n',
        day: 26,
        month: 11,
        year: 2019
    },
    {
        name: 'New Year\'s Eve',
        type: 'n',
        day: 31,
        month: 11,
        year: 2019
    },
]
// set calender color
importantDates.forEach(date => setColor(date.month, date.day, date.year, date.type))

// set updates
function convertDate(_temp) {
    return parseInt(_temp.getFullYear() + (_temp.getMonth() < 10 ? "0" + _temp.getMonth() : _temp.getMonth().toString()) + (_temp.getDate() < 10 ? "0" + _temp.getDate() : _temp.getDate().toString()));
}
const gdate = convertDate(new Date())
importantDates.filter(date => {
    const __date = convertDate(new Date(date.year, date.month, date.day))
    return (__date - gdate >= 0 ? true : false);
}).forEach(date => {
    let updateTemp = '';
    if (date.type == 'v') {
        updateTemp = `
    <div class="media text-muted pt-3">
                        <img src="images/c1.svg" alt="" class="mr-2 rounded">
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">${date.day}, ${monthHash[date.month]} ${date.year}</strong>
                            ${date.name}
                        </p>
                    </div>
                    `;
    } else if (date.type == 'p') {
        updateTemp = `
                    <div class="media text-muted pt-3">
                        <img src="images/c3.svg" alt="" class="mr-2 rounded">
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">${date.day}, ${monthHash[date.month]} ${date.year}</strong>
                            ${date.name}
                        </p>
                    </div>`;
    } else {
        updateTemp = `
                    <div class="media text-muted pt-3">
                        <img src="images/c2.svg" alt="" class="mr-2 rounded">
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">${date.day}, ${monthHash[date.month]} ${date.year}</strong>
                            ${date.name}
                        </p>
                    </div>`;
    }
    const upcomingEvents = document.getElementsByClassName('up-coming-events')[0]
    upcomingEvents.innerHTML += updateTemp;

})

const prevChosen = {
    next6month: 5,
    lastday: 31,
}
let inner = '';
let yTime = 0;
function selectYearEnd(n) {
    yTime++;
    if(yTime >1) {
        setTimeout(() => {
            openSideBar();
        }, 500);
    }


    n = parseInt(n);
    const next6month = (n + 6 > 11 ? n + 6 - 12 : n + 6)
    const lastday = new Date(2019, next6month + 1, 0).getDate()

    setColor(prevChosen.next6month, prevChosen.lastday, 2019, 'reset')
    setColor(next6month, lastday, 2019, 'y')
    prevChosen.next6month = next6month;
    prevChosen.lastday = lastday;
    if (inner.length < 2) {
        inner = document.getElementsByClassName('up-coming-events')[0].innerHTML;
    }

    document.getElementsByClassName('up-coming-events')[0].innerHTML = `                
    <div class="media text-muted pt-3">
                    <div  class="mr-2 rounded" style="background-color:rgb(66, 193, 155); width: 30px; height: 30px;"></div>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">${lastday}, ${monthHash[next6month]}</strong>
                        
                        YOUR ACCOUNT YEAR END
                    </p>
                </div> ${inner}`
}
selectYearEnd(11)
