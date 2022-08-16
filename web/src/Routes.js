
import { Router, Route, Set } from '@redwoodjs/router'

import ReviewsLayout from 'src/layouts/ReviewsLayout'
import OrdersLayout from 'src/layouts/OrdersLayout'

import ProductsLayout from 'src/layouts/ProductsLayout'

import CategoriesLayout from 'src/layouts/CategoriesLayout'
import UserLayout from 'src/layouts/UserLayout'
import SupplierLayout from './layouts/SupplierLayout/SupplierLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={AdminPage} name="admin" />
      <Set wrap={ReviewsLayout}>
        <Route path="/reviews/new" page={ReviewNewReviewPage} name="newReview" />
        <Route path="/reviews/{id}/edit" page={ReviewEditReviewPage} name="editReview" />
        <Route path="/reviews/{id}" page={ReviewReviewPage} name="review" />
        <Route path="/reviews" page={ReviewReviewsPage} name="reviews" />
      </Set>
      {/* <Set wrap={OrdersLayout}>
        <Route path="/orders/new" page={OrderNewOrderPage} name="newOrder" />
        <Route path="/orders/{id}/edit" page={OrderEditOrderPage} name="editOrder" />
        <Route path="/orders/{id}" page={OrderOrderPage} name="order" />
        <Route path="/orders" page={OrderOrdersPage} name="orders" />
      </Set> */}
      <Set wrap={SupplierLayout} private unauthenticated="home" role="admin" >
        <Route path="/account" page={AccountPage} name="account" />
        <Route path="/orders/new" page={OrderNewOrderPage} name="newOrder" />
        <Route path="/orders/{id}/edit" page={OrderEditOrderPage} name="editOrder" />
        <Route path="/orders/{id}" page={OrderOrderPage} name="order" />
        <Route path="/orders" page={OrderOrdersPage} name="orders" />
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={CategoriesLayout}>
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Set wrap={UserLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/product-details" page={ProductDetailsPage} name="productDetails" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
    </Router>
  )
}

export default Routes
