import { Ring } from '@uiball/loaders'
const Loader = () => {
return (  
    
    <div className='loader-container'>
<Ring 
className="test"
 size={80}
 lineWeight={4.5}
 speed={2.5} 
 color="#64d7d6" 
/>
    </div>

    );
}
 
export default Loader;