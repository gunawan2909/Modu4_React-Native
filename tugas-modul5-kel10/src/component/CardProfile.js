
import "./CardProfile.css";

export default function CardSmall({ Nama, Universitas, img}) {
  return (
    <div className="kartu" >
      <img src={img} alt="" className="PP" />
      
      <div className="keterangan">
        <div>
          <p id="Nama">{Nama}</p>
          <p id="Universitas">{Universitas}</p>  
        </div>
              
      </div>
    </div>
  );
}
