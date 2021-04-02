import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "ROG",
                "src": "https://gadgetsquad.id/wp-content/uploads/2019/07/Laptop-Asus-ROG-Strix-600x400.jpg",
                "content": "ASUS ROG GL503GE Core I7-8750H NVIDIA GTX 1050TI 4GB,Laptop Gaming premium tentumya, soal performa pastinya ngebut banget pake SSD 512GB,Udah siap lah untuk dipake kerja berat",
                "price": 16000000,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Razer",
                "src": "https://img.tek.id/img/content/2020/11/06/34271/razer-perkenalkan-laptop-mainstream-pertama-mereka-razer-book-13-FElK7OcCQy.jpg",
                "content": "RAZER BLADE 14 2017 RZ09-0195 FHD Core i7-7700HQ Kabylake Nvidia Geforce GTX 1060,Laptop Gaming premium tentumya, soal performa pastinya ngebut banget pake SSD 512GB,Udah siap lah untuk dipake kerja berat",
                "price": 14000000,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Legion",
                "src": "https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2020/08/20/3752165283.png",
                "content": "LENOVO LEGION Y740 Core I7-9750 NVIDIA RTX 2060 6GB,Laptop Gaming premium tentumya, soal performa pastinya ngebut banget pake SSD 512GB,Udah siap lah untuk dipake kerja berat",
                "price": 15000000,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


