import React, {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";

import {Context} from "../store/appContext";

import "../../styles/demo.css";
import LearMore from "../component/learnMore.jsx";

export const Demo = () => {
    const {
        store,
        actions
    } = useContext(Context);

    return (
		<LearMore/>
	);
};