
import axios from "axios";

 const getDatas = async (number) =>{
    const getUser = await(async()=>{
        return new Promise(async(resolve,reject) => {
            const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
            resolve(data);
        })
    })

    const getPost = await(async() => {
        return new Promise(async(resolve,reject) => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + number);
            resolve(data);
        })
    })

    await (async() => {
        const user = await getUser();
        const post = await getPost();

        console.log(user);
        console.log(post);
    })();
 }


export default getDatas;