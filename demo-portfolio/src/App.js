import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";           
import React, { useState, useRef } from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DeferredContent } from 'primereact/deferredcontent';
import { Column } from 'primereact/column'


function App() {

  const toast = useRef(null);
  const [products, setProducts] = useState(null);

  const onImageLoad = () => {
      toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
  }

  const onDataLoad = () => {
      then([1,2,3,4,5,6]).then(data => setProducts(data));
      toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Card title="Title" subTitle="SubTitle">
    Content
</Card>
         <Button label="Show" />
      </header>
      <DeferredContent onLoad={onImageLoad}>
                    <img src="images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
                </DeferredContent>

                <div style={{height: '500px'}}></div>

                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
  
    </div>
  );
}

// REvisar https://primefaces.org/primereact/

export default App;
