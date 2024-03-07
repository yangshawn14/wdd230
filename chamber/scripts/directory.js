/*********************
 * Directory Page 
 *********************/
const baseURL = "https://yangshawn14.github.io/wdd230/"
const membersURL = "https://yangshawn14.github.io/wdd230/chamber/data/members.json";
document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("grid-view-btn");
    const listViewBtn = document.getElementById("list-view-btn");
    const membersContainer = document.querySelector(".members-container");

    gridViewBtn.addEventListener("click", function () {
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
    });

    listViewBtn.addEventListener("click", function () {
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
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
        members.forEach(function (member) {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");

            memberElement.innerHTML = `
            <h3>${member.name}</h3>
            <p>Description: ${member.description}</p>
            <p>Phone: ${member.phone}</p>
            <p>Email: ${member.email}</p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>Website: <a href="${member.website}" target="_blank" class="websiteURL">${member.website}</a></p>
            <img src="${member.image}" alt="${member.name}">
            `;
            console.log(baseURL + member.image)
            membersContainer.appendChild(memberElement);
        });

    }

    // Call the function to populate members
    populateMembers();
});





