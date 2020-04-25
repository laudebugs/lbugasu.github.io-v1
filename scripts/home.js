document.querySelector('.projects').addEventListener('click', function(evt){
    evt.preventDefault();
    body = document.querySelector('.thisIsBody');
    projects = document.createElement('div');
    projects.className = "myProjects";
    projects.id = "projects"
    projects.innerHTML = 
    `
    <div style="margin-top: 10%;" id="layer">
            <div id="whiteBG" class="leftBlock">
                <h2 id="title"class="alignR">A difinitive guide to</h3>
            </div>
            <div id="greyBG" class="rightBlock">
                <h3 id="title"class="alignL">my work.</h3>
            </div>
        </div>
        <div id="layer">
            <div id="greyBG" class="leftBlock" ">
                    <h2>On This Topic</h2>
                    <h4>a website to curate podcasts based on a specific topic</h4>
                    <p><em>Technologies: </em>Javascript, Nodejs, MongoDB, HTML, CSS</p>
                    <a href="linserv1.cims.nyu.edu:20908">Project Link</a>
                    <img  class="demo"src="css/images/on this topic.gif" alt="">
            </div>

            <div id="whiteBG"class="leftBlock">
                <h2>Viables</h2>
                <h4>a mobile app to track carton box reuse on campuses</h4>
                <p><em>Technologies: </em>Flutter, Dart</p>
                <a href="https://devpost.com/software/viables"> Devpost Link</a>
                <img class="demo"src="css/images/viables.png" alt="">
            </div>
        </div>
        <div id="layer">
            <div id="greyBG" class="leftBlock">
                <h2>Sentiment Analysis</h2>
                <a href="https://github.com/lbugasu/sentiment-analysis-on-movie-reviews"> Link to Repo</a>
                <h4>implimented Naive Bayes algorithm to perform sentiment on movie reviews</h4>
                <p><em>Technologies: </em>Python, Natural Language Translation Kit, Machine Learning</p>
                <img class="demo"src="css/images/sentiment-analysis.png" alt="">
            </div>
            <div id="whiteBG"class="rightBlock">
                <div id="whiteBG"class="leftBlock">
                    <h2 id="title2" class="alignR" >work in</h2>
                </div>
                <div id="greyBG"class="rightBlock">
                    <h2 id="title2" class="alignL">progress</h2>
                </div>
                <h2>Tamaduni</h2>
                <h4>collecting stories and data of cultures</h4>
                <p><em>Project Goals</em></p>
                <ul>
                    <li>Expand access to cultural and historical information to Kenyans</li>
                    <li>digitize non-digital content</li>
                    <li>Understand data from multiple source points</li>
                </ul>
                <h4>Preliminary site</h4>
                <img class="demo"src="css/images/tamaduni.png" alt="">
            </div>
        </div>

    
    `;
    body.append(projects);
    window.location.href = "#projects";
});