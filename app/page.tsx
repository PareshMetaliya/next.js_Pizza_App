import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <div className="p-8">
      <ul>
<li>
<Link href= "/menu">Menu</Link>
</li>
<li>
<Link href= "/menu/1">Product 1</Link>
</li>
<li>
<Link href= "/menu/2">Product 2</Link>
</li>
<li>
<Link href= "/menu/3">Product 3</Link>
</li>
<li>
<Link href = "/login">Log In</Link>
</li>
<li>
<Link href = "/signup">Sign Up</Link>
</li>
<li>
<Link href = "/cart">Cart</Link>
</li>
<li>
<Link href = "/cart/checkout">CheckOut</Link>

</li>
      </ul>
    
    
   
   
    
   
    </div>
  );
}
