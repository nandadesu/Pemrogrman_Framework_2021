const Post = (props) => {
    return(
        <div class="post-artikel">
            <h2>Daftar Artikel</h2>
            <div class="artikel">
                <div class= "gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail"/>
                </div>
                <div class="konten-artikel">
                    <div class="judul-artikel">{props.judul}</div>
                    <p class="isi-artikel">{props.isi}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Post;