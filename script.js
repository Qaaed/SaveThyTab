import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://savethytab-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "thytabs");

//retrieving IDS
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

//event listeners
deleteBtn.addEventListener("click", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});

//render function
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }

  ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function (snapshot) {
  const snaptshotExists = snapshot.exists();
  if (snaptshotExists) {
    const snapshotValues = snapshot.val();
    const chores = Object.values(snapshotValues);
    render(chores);
  }
});
