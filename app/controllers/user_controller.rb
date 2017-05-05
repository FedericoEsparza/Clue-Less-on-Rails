class UserController < ApplicationController
  def c_user
    render json: {email: current_user.email, id: current_user.id}
  end
end
