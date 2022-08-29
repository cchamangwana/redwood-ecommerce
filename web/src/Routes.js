
import { Router, Route, Set, Private } from '@redwoodjs/router'
import AdminLayout from 'src/layouts/AdminLayout'
import ProductsLayout from 'src/layouts/ProductsLayout'

import CategoriesLayout from 'src/layouts/CategoriesLayout'
import UserLayout from 'src/layouts/UserLayout'
import AccountLayout from './layouts/AccountLayout/AccountLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={AdminLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
          <Route path="/admin/users" page={UsersPage} name="users" />
          <Set wrap={CategoriesLayout}>
              <Route path="/admin/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
              <Route path="/admin/categories/{id}/edit" page={CategoryEditCategoryPage} name="editCategory" />
              <Route path="/admin/categories/{id}" page={CategoryCategoryPage} name="category" />
              <Route path="/admin/categories" page={CategoryCategoriesPage} name="categories" />
         </Set>
        </Set>
      </Private>

      <Set wrap={AccountLayout} private unauthenticated="home" role="admin" >
        <Route path="/account" page={AccountPage} name="account" />
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
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
