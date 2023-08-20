import React, { useEffect, useState } from "react";
import "./ProblemStatement.css";

const ProblemStatement=()=>{
    return(
        <>
        <section className="problem-statement">
        <div className="page-container">
        <h1 className="heading">Problem Statement</h1>

        <h2 className="sub-heading">WEB/APP</h2>
        <div className="cards-container">
            
                <div className="card-anime">
                    <div className="card-web-1">
                        <h2>Random Text</h2>
                        <p>This is just some random text.</p>
                    </div>
                </div>
            <div className="card-anime">
            <div className="card-web-2">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        <div className="card-anime">
            <div className="card-web-3">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        </div>
   
        <h2 className="sub-heading">AI/ML</h2>
        <div className="cards-container">
            <div className="card-anime">
            <div className="card-ai-1">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        <div className="card-anime">
            <div className="card-ai-2">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        <div className="card-anime">
            <div className="card-ai-3">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        </div>

        <h2 className="sub-heading">Blockchain</h2>
        <div className="cards-container">
            <div className="card-anime">
            <div className="card-block-1">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        <div className="card-anime">
            <div className="card-block-2">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        <div className="card-anime">
            <div className="card-block-3">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        </div>

        <h2 className="sub-heading">Open Innovation</h2>
        <div className="cards-container">
            <div className="card-anime">
            <div className="card-open-1">
                <h2>Random Text</h2>
                <p>This is just some random text.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
        </>
    )
}

export default ProblemStatement;