/*********************
 * Directory Page 
 *********************/
const baseURL = "https://raw.githubusercontent.com/yangshawn14/wdd230/main/chamber/"
const membersURL = "https://yangshawn14.github.io/wdd230/chamber/data/members.json";
document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("grid-view-btn");
    const listViewBtn = document.getElementById("list-view-btn");
    const membersContainer = document.querySelector(".members-container");
    const main = document.querySelector(".directory");
    const memberCard = document.querySelector(".member-card");

    gridViewBtn.addEventListener("click", function () {
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
    });

    listViewBtn.addEventListener("click", function () {
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
        main.classList.add("list-view");
        memberCard.classList.add("list-view");
    });

    // Function to fetch JSON data
    async function fetchMemberData() {
        try {
            const response = await fetch(membersURL);
            const data = await response.json();
            return data.companies;
        } catch (error) {
            console.error("Error fetching member data:", error);
            return [];
        }
    }

    // Function to populate members dynamically
    async function populateMembers() {
        const members = await fetchMemberData();
        membersContainer.innerHTML = "";
        members.forEach(function (member, index) {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");

            memberElement.innerHTML = `
            <img src="${baseURL}${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.email}</p>
            <p><a href="${member.website}" target="_blank" class="websiteURL">${member.website}</a></p>
            `;

            // Alternating background colors
            if (index % 2 === 0) {
                memberElement.classList.add("even");
            } else {
                memberElement.classList.add("odd");
            }

            membersContainer.appendChild(memberElement);
        });

    }

    // Call the function to populate members
    populateMembers();
});





