import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = "pk_test_Y2l2aWwtZ2FyLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";

const clerk = new Clerk(clerkPubKey);
await clerk.load();

if (clerk.user) {
  const firstName = clerk.user.firstName;
  window.location.href = "professor-home.html";
  document.getElementById("nav-profile-name").innerHTML = `
  ${firstName}
`;
} else {
  document.getElementById("app").innerHTML = `
    <div id="sign-in"></div>
  `;

  const signInDiv = document.getElementById("sign-in");

  clerk.mountSignIn(signInDiv);
}
