// listen for auth status changes
const a=document.getElementById('alpha')
auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('guides').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      }, err => console.log(err.message));
    } else {
      setupUI();
      setupGuides([]);
    }
  });
  
  // create new guide
  const createForm = document.querySelector('#create-form');
  createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('guides').add({
      title: createForm.title.value,
      
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    }).catch(err => {
      console.log(err.message);
    });
  });
  
  
  // signup
  const signupForm = document.querySelector('#signup-form');
  
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        bio: signupForm['signup-bio'].value
      });
    }).then(() => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    console.log('123');
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    if(email==="login@gmail.com" && password==="Pass12345")
    {
      // let aTag=document.createElement('a');
      // aTag.setAttribute('href',"/home/piyush/webDev/cfg/scripts/qw.html");
      // aTag.innerText = "admin";
      // a.appendChild(s);
      window.location = "index.html"
    }
    else if(email==="viewer1@gmail.com" && password==="abc123"){
      window.location = "../vis1.html"
    }
    else if(email==="viewer2@gmail.com" && password==="123def"){
      window.location = "../vis1.html"
    }
    else if(email==="viewer3@gmail.com" && password==="12cc456"){
      window.location = "../vis1.html"
    }

    else{
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
    }
  });