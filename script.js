//task 1
async function iterateWithasyncAwait(arr) {
  console.log("start...");
  for (const value of arr) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}
let urlsArr = [1, 2, 3, 4, 5];
// iterateWithasyncAwait(urlsArr);
// ------------------------------------------------------------------------------------------------------
//task 2
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "data from an API" });
    }, 2000);
  });
}
async function awaitCall() {
  console.log("fetching data...");
  const data = await fetchData(true);
  console.log(data);
}
// awaitCall();
// ------------------------------------------------------------------------------------------------------------------------
//task 3
async function fetchData(test) {
  return new Promise((resolve, reject) => {
    if (test) {
      setTimeout(() => {
        resolve({ data: "Data from an API" });
      }, 2000);
    } else {
      setTimeout(() => {
        reject({ error: "Something went wrong ❌" });
      }, 2000);
    }
  });
}

async function awaitCall() {
  try {
    console.log("fetching data...");
    const data = await fetchData(false);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// awaitCall();

// task : 3-2
async function asyncFn1() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 1");
  });
}
async function asyncFn2() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 2");
  });
}
async function asyncFn3() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 3");
  });
}

async function chainedAsyncFunctions() {
  console.log("Start...");
  await asyncFn1();
  await asyncFn2();
  await asyncFn3();
  console.log("End..");
}
// chainedAsyncFunctions();
// task 04

// Task 04
async function fetchApi1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Data from an API 1" });
    }, 2000);
  });
}
async function fetchApi2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Data from an API 2" });
    }, 4000);
  });
}
async function concurrentRequests() {
  console.log("Starting ....");
  const [result1, result2] = await Promise.all([fetchApi1(), fetchApi2()]);
  console.log("Fetchi api1 : ", result1);
  console.log("Fetchi api2 : ", result2);
  console.log("End");
}
//concurrentRequests();
// Task 05
async function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `Data from ${url}` });
    }, 2000);
  });
}

async function parallelCalls(urls) {
  let promises = urls.map((url) => fetchData(url));
  responses = await Promise.all(promises);

  responses.forEach((response) => {
    console.log(response);
  });
}

let arr = ["https://exemple1.com/", "https://exemple2.com/"];
parallelCalls(arr);
