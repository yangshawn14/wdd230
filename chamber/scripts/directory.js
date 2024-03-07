/*********************
 * Directory Page 
 *********************/
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
            const response = await fetch("data/members.json");
            const data = await response.json();
            console.log(data.companies)
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
                <p>${member.description}</p>
                <p>Phone: ${member.phone}</p>
                <p>Email: ${member.email}</p>
                <a href="${member.website}" target="_blank">Website</a>
            `;

            membersContainer.appendChild(memberElement);
        });
    }

    // Call the function to populate members
    populateMembers();
});





