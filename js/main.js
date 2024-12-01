
$(function (){
    $('.search-form input').on('focus',function (){

        $('.search-input').addClass('focused')
    }).on('focusout',function (){

        $('.search-input').removeClass('focused')
    })
})

const images = ['https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png',
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
            ctx.drawImage(label,x.getPixelForValue(index),x.top + 20, 42,42);
        });
    }
}


// Bar chart
new Chart(document.getElementById("myChart"), {
    type: 'bar',

    data: {
        labels:['Red Vans', 'Blue Vans', 'Green Vans', 'Gray Vans',
   'Red Vans', 'Blue Vans', 'Green Vans', 'Gray Vans',
     'Red Vans', 'Blue Vans', 'Green Vans', 'Gray Vans'],
        datasets: [
            {
                label: " ",
                backgroundColor: ['#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505','#050505', '#050505', '#050505', '#050505'],
                data: [70,90,60,70,50,70,90,60,70,50,40,90],
                images : ['https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png',
                    'https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png',
                    'https://i.sstatic.net/2RAv2.png', 'https://i.sstatic.net/Tq5DA.png', 'https://i.sstatic.net/3KRtW.png', 'https://i.sstatic.net/iLyVi.png'],
                borderWidth: 2,
                borderRadius: 8,
                borderColor: '#050505',
                borderSkipped: false,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: { display: false },
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

