
print(srtm);
Map.addLayer(srtm,{min:0, max:8000,palette:'yellow,grey,purple'},'srtm');
Map.addLayer(water,{bands: 'occurrence',min:0, max:100,palette:'lightblue,blue'},'water');

