var width = document.getElementById('svg') .clientWidth;
var height = document.getElementById('svg') .clientHeight;

console.log(width,height);

document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/7b/ef/15/7bef154dc7dd0cb3fdebaae1250ff2ce.jpg')";

var marginLeft = 0;
var marginTop = 0;

var dataRec;
var dataMed;
var state;

var clicked = true;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var albersProjection = d3.geoAlbersUsa()
    .scale(1200)
    .translate([(width/2) , (height/2)]);

var path = d3.geoPath()
    .projection(albersProjection);

//import the data from the .csv file
d3.json('./cb_2016_us_state_20m.json', function(dataIn){

    console.log(dataIn);

    svg.append('text')
        .text('Marijuana Laws Across the U.S.')
        .attr('transform','translate(300, 100)')
        .attr('stroke','greenYellow')
        .attr('stroke-width','.25')
        //.style('text-anchor','middle')
        .style('fill','green')
        .attr('font-size','36');

    svg.selectAll('path')
        .data(dataIn.features)
        .enter()
        .append('path')
        .attr('d',path)
        .attr('fill','green')
        .attr('stroke','darkGreen')
        .attr('stroke-width','2')
        .on('mouseover', function(d){console.log(d.properties.NAME)});

    /*svg.selectAll('textBox')
        .append('box')
        .attr('stroke', 'black')*/

    svg.append('rect')
        .attr("x", 5)
        .attr("y", 5)
        .attr("width", 150)
        .attr("height", 100)
        .attr("fill", "white")
        .attr('stroke','green')
        .attr('fill','greenYellow')
        .attr('stroke-width', 5)
        .attr('text','testing')
        .attr("id", "rectLabel")
        //.text("this is testing 123");

    svg.append('text').text('info on states')
        .attr('x', 20)
        .attr('y', 40)
        .attr('fill', 'black')

    svg.append('text').text('will go here')
        .attr('x', 20)
        .attr('y', 60)
        .attr('fill', 'black')

    svg.append('text').text('on mouseover')
        .attr('x', 20)
        .attr('y', 80)
        .attr('fill', 'black')

    svg.selectAll('circle21')
        .data([{lat:42.3601,long:-71.0589 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');
        //.attr('stroke-width','2');

    svg.selectAll('circle1')
        .data([{lat:58.301598,long:-134.420212 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    svg.selectAll('circle2')
        .data([{lat:32.377716,long:-86.300568 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    svg.selectAll('circle3')
        .data([{lat:34.746613,long:-92.288986 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    svg.selectAll('circle4')
        .data([{lat:33.448143,long:-112.096962 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    svg.selectAll('circle5')
        .data([{lat:38.576668,long:-121.493629 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    /*svg.selectAll('button')
        .attr('fill','green');*/

    /*svg.selectAll('circle')
        .data([{lat:42.3601,long:-71.0589 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');*/

    /*svg.append('text')
        .text('Marijuana Laws Across the U.S.')
        .attr('transform','translate(300, 100)')
        .style('text-anchor','middle')
        .style('fill','green')
        .attr('font-size','36'); */

});

function buttonClicked(){
    console.log('here');
}

d3.csv('./finalData.csv', function(dataIn){


    dataRec = dataIn.filter(function(d){
        return d.dataRec == dataRec;
    });

    dataMed = dataIn.filter(function(d){
        return d.dataMed == dataMed;

    });

    console.log(dataIn);

    svg.selectAll('circles')
        .data(dataMed)
        .enter()
        .append('circle')
        .attr('class','Medical')
        .attr('r', 6)
        .attr('fill', "white");

    svg.selectAll('circles')
        .data(dataRec)
        .enter()
        .append('circle')
        .attr('class','Recreational')
        .attr('r', 3)
        .attr('fill', "white");

    /*svg.selectAll('circles')
        .data(state)
        .enter()
        .append('circle')
        .attr('class','state')
        .attr('r', 5)
        .attr('fill','white');*/

    //drawPoints(dataRec);
    //drawPoints(dataMed);

    //drawPoints(state);

});
