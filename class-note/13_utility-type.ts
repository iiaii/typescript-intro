interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}


// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ...
}


interface ProductDetailDto {
    id: number;
    name: string;
    price: number;
}
function displayProductDetail(shoppingItem: ProductDetailDto) {

}

/** 유틸리티 타입 (인터페이스 선언 없이 해결) **/

// Pick (필요한 것을 골라서 해결)
type ProductMain = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductMain(shoppingItem: ProductMain) {

}

// Omit (필요 없는 것을 제외해서 해결)
type ProductSimple = Omit<Product, 'brand' | 'price'>;
function displayProductSimple(shoppingItem: ProductSimple) {

}

// Partial
// 특정 상품 정보를 업데이트하는 함수
type UpdateProduct = Partial<Product>
// Partial과 동일함
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
function updateProductItem(productItem: UpdateProduct) {

}

// 유틸리티 타입 구현 - partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

interface UserProfileUpdate1 {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}

// #1
type UserProfileUpdate2 = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2
type UserProfileUpdate3 = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

// keyof -> 객체에서 키들을 나열함
type myPartial<T> = {
    [p in keyof T]?: T[p]
}

type UserProfilePartial = myPartial<UserProfile>;

