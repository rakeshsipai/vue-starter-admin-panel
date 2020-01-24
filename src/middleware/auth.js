export default ({ redirect, store }) => {
    let loggedIn = store.getters.loggedIn;
    if (!loggedIn || !loggedIn.id) {
        return redirect({ name: "Login" })
    }
}