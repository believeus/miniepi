import F2 from '../../../f2-canvas/lib/f2';

Page({
  data: {
    lineData: {
      onInit: function (canvas, width, height) {
        const data = [{ "year": 1997, "type": "LOW", "value": 4.9 }, { "year": 1997, "type": "MODERATE", "value": 4.8 }, { "year":  1998, "type": "LOW", "value": 4.5 }, { "year": 1998, "type": "MODERATE", "value": 4.3 }, { "year": 1999, "type": "LOW", "value": 4.2 }, { "year": 1999, "type": "HIGH", "value": 3.9 }, { "year": 2000, "type": "LOW", "value": 4 }, { "year": 2000, "type": "HIGH", "value": 3.7 }, { "year": 2001, "type": "MODERATE", "value": 4.7 }, { "year": 2001, "type": "HIGH", "value": 4.7 }, { "year": 2002, "type": "LOW", "value": 5.8 }, { "year": 2002, "type": "HIGH", "value": 5.6 }, { "year": 2003, "type": "LOW", "value": 6 }, { "year": 2003, "type": "HIGH", "value": 5.2 }, { "year": 2004, "type": "LOW", "value": 5.5 }, { "year": 2004, "type": "HIGH", "value": 4.6 }, { "year": 2005, "type": "LOW", "value": 5.1 }, { "year": 2005, "type": "HIGH", "value": 3.7 }, { "year": 2006, "type": "LOW", "value": 4.6 }, { "year": 2006, "type": "HIGH", "value": 3.2 }, { "year": 2007, "type": "LOW", "value": 4.6 }, { "year": 2007, "type": "HIGH", "value": 4 }, { "year": 2008, "type": "MODERATE", "value": 5.8 }, { "year": 2008, "type": "HIGH", "value": 6.3 }, { "year": 2009, "type": "LOW", "value": 9.3 }, { "year": 2009, "type": "HIGH", "value": 10.4 }, { "year": 2010, "type": "LOW", "value": 9.6 }, { "year": 2010, "type": "HIGH", "value": 11.1 }, { "year": 2011, "type": "LOW", "value": 8.9 }, { "year": 2011, "type": "HIGH", "value": 10 }, { "year": 2012, "type": "LOW", "value": 8.1 }, { "year": 2012, "type": "HIGH", "value": 8.5 }, { "year": 2013, "type": "LOW", "value": 7.4 }, { "year": 2013, "type": "HIGH", "value": 7.2 }, { "year": 2014, "type": "LOW", "value": 6.2 }, { "year": 2014, "type": "HIGH", "value": 6.3 }, { "year": 2015, "type": "LOW", "value": 5.3 }, { "year": 2015, "type": "HIGH", "value": 5.4 }, { "year": 2016, "type": "LOW", "value": 4.9 }, { "year": 2016, "type": "HIGH", "value": 4.9 }, { "year": 2017, "type": "LOW", "value": 4.4 }, { "year": 2017, "type": "HIGH", "value": 4.3 }];
        const chart = new F2.Chart({
          el: canvas,
          width,
          height
        });
        chart.source(data, {
          year: {
            range: [0, 1],
            ticks: [1997, 1999, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017]
          },
          value: {
            tickCount: 10,
            formatter(val) {
              return val.toFixed(1) + '%';
            }
          }
        });

        chart.tooltip({
          custom: true, // 自定义 tooltip 内容框
          showXTip: true,
          onChange(obj) {
            const legend = chart.get('legendController').legends.top[0];
            const tooltipItems = obj.items;
            const legendItems = legend.items;
            const map = {};
            legendItems.map(item => {
              map[item.name] = Object.assign({}, item);
            });
            tooltipItems.map(item => {
              const { name, value } = item;
              if (map[name]) {
                map[name].value = value;
              }
            });
            legend.setItems(Object.values(map));
          },
          onHide() {
            const legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().country);
          }
        });

        chart.guide().rect({
          start: [2011, 'max'],
          end: ['max', 'min'],
          style: {
            fill: '#CCD6EC',
            opacity: 0.3
          }
        });
        chart.line().position('year*value').color('type', val => {
          if (val === 'LOW') {
            return '#036eb2';
          } else if (val =='MODERATE'){
            return "#666666";
          }else{
            return "#c1272d";
          }
        });
        chart.render();
        return chart;
      }
    },
    smokeData: {
    onInit:function (canvas, width, height) {
    const { Util, G } = F2;
    const { Group } = G;
    function drawLabel(shape, coord, canvas) {
      const { center } = coord;
      const origin = shape.get('origin');
      const points = origin.points;
      const x1 = (points[2].x - points[1].x) * 0.75 + points[1].x;
      const x2 = (points[2].x - points[1].x) * 1.8 + points[1].x;
      const y = (points[0].y + points[1].y) / 2;
      const point1 = coord.convertPoint({ x: x1, y });
      const point2 = coord.convertPoint({ x: x2, y });

      // const group = new Group();
      const group = canvas.addGroup();
      group.addShape('Line', {
        attrs: {
          x1: point1.x,
          y1: point1.y,
          x2: point2.x,
          y2: point2.y,
          lineDash: [0, 2, 2],
          stroke: '#808080'
        }
      });
      const text = group.addShape('Text', {
        attrs: {
          x: point2.x,
          y: point2.y,
          text: origin._origin.type + '  ' + origin._origin.cost + ' 元',
          fill: '#808080',
          textAlign: 'left',
          textBaseline: 'bottom'
        }
      });
      const textWidth = text.getBBox().width;
      const baseLine = group.addShape('Line', {
        attrs: {
          x1: point2.x,
          y1: point2.y,
          x2: point2.x,
          y2: point2.y,
          stroke: '#808080'
        }
      });
      if(point2.x > center.x) {
  baseLine.attr('x2', point2.x + textWidth);
} else if (point2.x < center.x) {
  text.attr('textAlign', 'right');
  baseLine.attr('x2', point2.x - textWidth);
} else {
  text.attr('textAlign', 'center');
  text.attr('textBaseline', 'top');
}
//canvas.add(group);
shape.label = group;
  }

const data = [
  { type: '轻微吸烟者(LIGHT)', cost: 3, a: '1' },
  // { type: '轻微(LIGHT)', cost: 338, a: '1' },
  // { type: '中等吸烟者(MOD)', cost: 118.5, a: '1' },
  // { type: '严重吸烟者(HEAVY)', cost: 78.64, a: '1' },
  // { type: '非常严重吸烟者(VERY HEAVY)', cost: 14.9, a: '1' },
];

let sum = 0;
data.map(obj => {
  sum += obj.cost;
});
  const  chart = new F2.Chart({
  el: canvas,
  width,
  height
});
chart.source(data);
let lastClickedShape;
chart.legend({
  position: 'bottom',
  offsetY: -5,
  marker: 'square',
  align: 'center',
  itemMarginBottom: 20,
  onClick(ev) {
    const { clickedItem } = ev;
    const dataValue = clickedItem.get('dataValue');
    const canvas = chart.get('canvas');
    const coord = chart.get('coord');
    const geom = chart.get('geoms')[0];
    const container = geom.get('container');
    const shapes = geom.get('shapes'); // 只有带精细动画的 geom 才有 shapes 这个属性

    let clickedShape;
    // 找到被点击的 shape
    Util.each(shapes, shape => {
      const origin = shape.get('origin');
      if (origin && origin._origin.type === dataValue) {
        clickedShape = shape;
        return false;
      }
    });

    if (lastClickedShape) {
      lastClickedShape.animate().to({
        attrs: {
          lineWidth: 0
        },
        duration: 200
      }).onStart(() => {
        if (lastClickedShape.label) {
          lastClickedShape.label.hide();
        }
      }).onEnd(() => {
        lastClickedShape.set('selected', false);
      });
    }

    if (clickedShape.get('selected')) {
      clickedShape.animate().to({
        attrs: {
          lineWidth: 0
        },
        duration: 200
      }).onStart(() => {
        if (clickedShape.label) {
          clickedShape.label.hide();
        }
      }).onEnd(() => {
        clickedShape.set('selected', false);
      });
    } else {
      const color = clickedShape.attr('fill');
      clickedShape.animate().to({
        attrs: {
          lineWidth: 5
        },
        duration: 350,
        easing: 'bounceOut'
      }).onStart(() => {
        clickedShape.attr('stroke', color);
        clickedShape.set('zIndex', 1);
        container.sort();
      }).onEnd(() => {
        clickedShape.set('selected', true);
        clickedShape.set('zIndex', 0);
        container.sort();
        lastClickedShape = clickedShape;
        if (clickedShape.label) {
          clickedShape.label.show();
        } else {
          drawLabel(clickedShape, coord, canvas);
        }
        canvas.draw();
      });
    }
  }
});
chart.coord('polar', {
  transposed: true,
  innerRadius: 0.7,
  radius: 0.5
});
chart.axis(false);
chart.tooltip(false);
chart.interval()
  .position('a*cost')
  .color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
  .adjust('stack');

chart.guide().text({
  position: ['50%', '50%'],
  content: sum.toFixed(2),
  style: {
    fontSize: 24
  }
});
chart.render();
return chart;
}}
  },

  onReady() {
  }
});
