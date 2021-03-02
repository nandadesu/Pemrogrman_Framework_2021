const Post = (props) => {
    return(
        <div class="post-artikel">
            <div class="artikel">
                <div class= "gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail"/>
                </div>
                <div className="konten-artikel">
                        <p className="nim">{props.nim}</p>
                        <p className="nama">{props.nama}</p>
                        <p className="alamat">{props.alamat}</p>
                        <p className="telfon">{props.telfon}</p>
                        <p className="angkatan">{props.angkatan}</p>
                        <p className="status">{props.status}</p>

                        <button className="btn btn-sm btn-warning" onClick={() =>props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Post;