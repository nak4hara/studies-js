function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });

//first function execute but do not wait for the answer
//starts to execute the second function,
//since he find the parameters, continue to execute the first function!!
//thats why it alerts the starting and then calls the finished