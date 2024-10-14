function setBreadCrumb(nav: any) {
  localStorage.setItem("breadcrumb", nav);
}

function getBreadCrumb(): string | null {
  return localStorage.getItem("breadcrumb");
}

export { setBreadCrumb, getBreadCrumb };
