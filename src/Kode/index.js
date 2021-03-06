import './Kode.css'

export default function Kode({to}) {
    return (
       <div className='Kode'>
            &lt;Kode <span className='light'>{to && 'to=\'{to}\'}'} </span>/&gt;
       </div>
    );
}
