import React from "react";
import "./App.css";
import Product from "./Product/Product";

export default function App() {
  return (
    <div className="container">
      <Product
        title="Samsung Galaxy Book 2 Pro 360"
        image="./images/laptop2.jpg"
        price="899"
        description="Samsung's latest big-screen two-in-one doesn't look
         all too different from its predecessor, but inside is a new 12th-gen
          Intel processor that gives it a sizable multicore performance bump.
           However, the other, smaller updates Samsung made to the Pro 360 improves the
            overall experience, making it one of the best two-in-ones available right now.
             And if you have other Galaxy devices, this is absolutely the two-in-one to get. "
      />
      <Product
        title="Microsoft Surface Pro 8"
        image="./images/laptop3.jpg"
        price="799"
        description="The Surface Pro continues to hit all the right notes
         if you're looking for a do-it-all Windows tablet that doubles as
          a Windows laptop. Microsoft recently updated it for the Surface
           Pro 9, but little has changed beyond a processor upgrade from 
           11th-gen Intel Core processors to 12th-gen chips as well as an 
           option for a Microsoft SQ 3 processor with 5G wireless. If you 
           were contemplating a Pro 8, it's still around but now with a lower
            price, and we recommend it for most people instead of the 
            Surface Pro 9. "
      />
      <Product
        title="Lenovo Duet Chromebook"
        image="./images/laptop4.jpg"
        price="333"
        description="The Lenovo Duet Chromebook (aka Chromebook Duet 3) is
         an awesome little 11-inch ChromeOS tablet with a detachable keyboard
          and touchpad. Its small size and performance aren't ideal for full-time use.
           But the Chromebook Duet 3 is a good pick if you're looking for an affordable 
           ultraportable device to get some work done on the go, sketch or jot down notes
            in class, or do simple stuff like email, web browsing, gaming, reading and streaming video.

        The original 10-inch version of the Duet Chromebook is also still available
         for $300 or less when it is in stock. "
      />
      <Product
        title="Asus ROG Flow X16"
        image="./images/laptop5.jpg"
        price="2000"
        description="Gaming laptops with 16-inch screens are common enough.
         What's unusual is finding one with a 360-degree hinge to become a
          foldable two-in-one that can be a laptop, a tablet and a couple of 
          things in between. Add another level of ingenuity and you've got 
          the ability to plug in a more-powerful external GPU for even better
           performance. It's expensive, to be sure, but the unique design and
            features as well as solid performance make it stand out."
      />
    </div>
  );
}
