(function () {

    const search = document.getElementById('buscar');
    const profile = document.getElementById('profile');
    const url = "https://api.github.com/users";
    const cliente_id = "8d457c5d913da4b6c702";
    const cliente_secret = "13876ec7fc6f1cbf59cdce71ab30174bc3cefbbe";





    async function getUser(user) {
        const profileResponse = await fetch(`${url}/${user}?cliente_id=${cliente_id}&cliente_secret=${cliente_secret}`);

        const profile = profileResponse.json();

        return profile;
    };

    function showProfile(user) {

        profile.innerHTML = `
        
        <div class="card">
                    <div class="img-user">
                        <img src="${user.avatar_url}" height="120" width="120">
                    </div>
                    <div class="name-user">
                        <div class="name-join">
                            <h4></h4>
                            <p class="data">Joined 25 jan 2020</p>
                        </div>
                        <p>@euverrange</p>
                        <p class="bio">This profile has no bio</p>

                        <div class="repos-container">
                            <div class="infos-user">
                                <div class="repos">
                                    <h5>Repos</h5>
                                    <p>${user.public_repos}</p>
                                </div>
                                <div class="followers">
                                    <h5>Followers</h5>
                                    <p>3938</p>
                                </div>
                                <div class="following">
                                    <h5>Following</h5>
                                    <p>8</p>
                                </div>
                            </div>
                        </div>

                        <div class="links">
                            <div class="links-list">
                                <div class="list-1">
                                    <a href=""><ion-icon name="pin" class="icon"></ion-icon>Praia Grande, SP</a>
                                    <a href=""><ion-icon name="pin" class="icon"></ion-icon>https://github.com/Guilherme-Verrange</a>
                                </div>
                                <div class="list-2">
                                    <a href=""><ion-icon name="logo-twitter" class="icon"></ion-icon>Not Available</a>
                                    <a href=""><ion-icon name="business" class="icon"></ion-icon>Empresa.com</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
        

        `

    }


    search.addEventListener("keyup", (e) => {

        const user = e.target.value;
        if (user.length > 0) {

            getUser(user).then(res => console.log(res));

        }

    })

})();