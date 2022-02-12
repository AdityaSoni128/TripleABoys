console.log("Welcome to the Singles Group")


let data = [
    {
        img: "Ad.jpg",
        name: "Aditya Soni",
        specification: "Good at Problem solving",
        qualifications: "Btech from Ips Academy",
        email: "showff128@gmail.com",
        language: "C++"
    },
    {
        img: "aj.jpg",
        name: "Ajay Soni",
        specification: "Good at Medical Topics",
        qualifications: "Neet Aspirant",
        email: "Phenom4242@gmail.com",
        language: "Mbbs"
    },
    {
        img: "am.jpeg",
        name: "Aman Uniyara",
        specification: "Good at django ",
        qualifications: "Btech from Acropolis",
        email: "Aman@123@gmail.com",
        language: "C++ and python"
    }
]



let btn = document.getElementById("btn");
let details = document.getElementById("details");

function iterator(data) {
    nextIndex = 0;

    return {
        next: function () {
            if (nextIndex < data.length) {
                return {
                    value: data[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }

}
let func = iterator(data);
showData();
function showData() {
    let val = func.next().value;
    if (val !== undefined) {
        let html = ` <img src="${val.img}" alt="image not available" >
        <div class="players">Name:  ${val.name}</div>
        <div class="players">specification: ${val.specification}</div>
        <div class="players">qualifications: ${val.qualifications}</div>
        <div class="players">email: ${val.email}</div>
        <div class="players">language: ${val.language}</div>
`
        details.innerHTML = html;
    } else {
        window.location.reload();
    }
}

btn.addEventListener("click", showData)