const loop = (times = 0, callback = null) => {
	
  if (!callback) {
  	return;
  }
  
  for (let i = 0; i < times; i ++) {
  	callback();
  }
  
};

loop(5);
loop(0, () => console.log('callback run 0'));
loop(5, () => console.log('callback run'));
