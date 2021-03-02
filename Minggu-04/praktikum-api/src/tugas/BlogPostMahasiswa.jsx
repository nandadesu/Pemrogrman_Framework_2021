import React, {Component} from "react";
import './BlogPostMahasiswa.css';
import Post from "./PostMahasiswa";

class BlogPost extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            telfon:"",
            angkatan:"",
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/posts/${data}`,{method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts',{
            method: 'post',
            headers: {
                'Accept': 'applicarion/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
            <div className="post-Mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telfon" className="col-sm-2 col-form-label">telfon</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="telfon" name="telfon" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} telfon={mahasiswa.telfon} 
                                angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;