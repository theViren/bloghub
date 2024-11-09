import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import styles from "@/styles/BreadCrumb.module.css";

const CustomBreadcrumb = () => {


  return (
    <Breadcrumb className={styles["breadcumb-body"]}>
      <Breadcrumb.Item className={styles["breadcrumbItemStyle"]} style={{zIndex: '3' }} href="/">
        <div className={styles["colorful-div"]}>Home</div>
      </Breadcrumb.Item>
      <Breadcrumb.Item className={styles["breadcrumbItemStyle"]} style={{zIndex: '2' }} href="/products">
        <div className={styles["colorful-div"]}>Products</div>
      </Breadcrumb.Item>
      <Breadcrumb.Item className={styles["breadcrumbItemStyle"]} style={{zIndex: '1' }} active>
        <div className={styles["colorful-div"]}>Commercial Property Loan Interest Rates with Tips Commercial Interest </div>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
