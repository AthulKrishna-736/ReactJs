import './Assign1.css'

function ProfileCard(props){
    return(
        <div className='profile-card'>
            <h1>{props.name}</h1>
            <p>Email:{props.email}</p>
        </div>
    );
}


function Userapp(){
    const users = [
        {id:1,name:"Leanne Graham", email:"leannegraham@abc.com"},
        {id:2,name:"Ervin Howwell", email:"ervinhowell@abc.com"}
    ];
    return(
        <div className="App">
           {users.map((user)=>{
             return <ProfileCard key={user.id} name={user.name} email={user.email}/>
           })
           }
        </div>
    );
}

export default Userapp;