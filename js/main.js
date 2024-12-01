
$(function (){
    $('.search-form input').on('focus',function (){

        $('.search-input').addClass('focused')
    }).on('focusout',function (){

        $('.search-input').removeClass('focused')
    })
    $('.dropdown-item').on('click', function (e){
        e.preventDefault();
        $(this).parents('.dropdown').find('.btn-select').text($(this).text())
        if($(this).data('value') == 'dark'){
            $('body').addClass('dark')
        } else if($(this).data('value') == 'light'){
            $('body').removeClass('dark')
        }
    })
})

const images = ['https://lilitantonyanwork.github.io/zodiac//images/oven.svg', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png',
    'https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png',
    'https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png']
    ;

const xScaleImage = {
    id: 'xScaleImage',

    afterDatasetsDraw(chart, args, plugins){

        const {ctx, data, chartArea: {bottom}, scales: {x}} = chart;
        ctx.save();

        data.datasets[0].images.forEach((image, index) =>{
            const label = new Image();
            label.src= image;
            const width= 10;
            ctx.drawImage(label,x.getPixelForValue(index) - 20,x.top + 20, 42,42);
        });
    }
}
const xScaleImageMobile = {
    id: 'xScaleImage',

    afterDatasetsDraw(chart, args, plugins){

        const {ctx, data, chartArea: {bottom}, scales: {x}} = chart;
        ctx.save();

        data.datasets[0].images.forEach((image, index) =>{
            const label = new Image();
            label.src= image;
            const width= 10;
            ctx.drawImage(label,x.getPixelForValue(index) - 10,x.top + 20, 24,24);
        });
    }
}


if($('section').hasClass('compatibility')){
if($(window).width() > 600 ){


// Bar chart
new Chart(document.getElementById("myChart"), {
    type: 'bar',

    data: {
        labels:['', '', '', '',
   '', '', '', '',
     '', '', '', ''],
        datasets: [
            {
                label: '',
                backgroundColor: ['#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505'],
                data: [70,90,60,70,50,70,90,60,70,50,40,90],
                images : ['https://lilitantonyanwork.github.io/zodiac/images/oven.svg', 'https://lilitantonyanwork.github.io/zodiac/images/lev.svg', 'https://lilitantonyanwork.github.io/zodiac/images/blizneci.svg', 'https://lilitantonyanwork.github.io/zodiac/images/rak.svg',
                    'https://lilitantonyanwork.github.io/zodiac/images/kozerog.svg', 'https://lilitantonyanwork.github.io/zodiac/images/deva.svg', 'https://lilitantonyanwork.github.io/zodiac/images/telec.svg', 'https://lilitantonyanwork.github.io/zodiac/images/oven.svg',
                    'https://lilitantonyanwork.github.io/zodiac/images/strelec.svg', 'https://lilitantonyanwork.github.io/zodiac/images/scorpion.svg', 'https://lilitantonyanwork.github.io/zodiac/images/ribi.svg', 'https://lilitantonyanwork.github.io/zodiac/images/vesi.svg'],
                borderWidth: 2,
                borderRadius: 8,
                borderColor: '#050505',
                borderSkipped: false,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    console.log(tooltipItem)
                    return tooltipItem.yLabel;
                }
            }
        },
        layout: {
            padding: {
                bottom: 62,
            },
        },

        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        },
        barThickness: 24,
        scales: {
            x:{
                ticks: {
                    padding: 40,
                    callback: ((value, index, values) => {
                        // return
                    })
                }
            }
        }
    },
    plugins:[xScaleImage]
});
} else {

// Bar chart
    new Chart(document.getElementById("myChart"), {
        type: 'bar',

        data: {
            labels:['', '', '', '',
                '', '', '', '',
                '', '', '', ''],
            datasets: [
                {
                    label: '',
                    backgroundColor: ['#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505'],
                    data: [70,90,60,70,50,70,90,60,70,50,40,90],
                    images : ['https://lilitantonyanwork.github.io/zodiac/images/oven.svg', 'https://lilitantonyanwork.github.io/zodiac/images/lev.svg', 'https://lilitantonyanwork.github.io/zodiac/images/blizneci.svg', 'https://lilitantonyanwork.github.io/zodiac/images/rak.svg',
                        'https://lilitantonyanwork.github.io/zodiac/images/kozerog.svg', 'https://lilitantonyanwork.github.io/zodiac/images/deva.svg', 'https://lilitantonyanwork.github.io/zodiac/images/telec.svg', 'https://lilitantonyanwork.github.io/zodiac/images/oven.svg',
                        'https://lilitantonyanwork.github.io/zodiac/images/strelec.svg', 'https://lilitantonyanwork.github.io/zodiac/images/scorpion.svg', 'https://lilitantonyanwork.github.io/zodiac/images/ribi.svg', 'https://lilitantonyanwork.github.io/zodiac/images/vesi.svg'],
                    borderWidth: 2,
                    borderRadius: 4,
                    borderColor: '#050505',
                    borderSkipped: false,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        console.log(tooltipItem)
                        return tooltipItem.yLabel;
                    }
                }
            },
            layout: {
                padding: {
                    bottom: 62,
                },
            },

            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            },
            barThickness: 14,
            scales: {
                x:{
                    ticks: {
                        padding: 40,
                        callback: ((value, index, values) => {
                            // return
                        })
                    }
                }
            }
        },
        plugins:[xScaleImageMobile]
    });
}
}

