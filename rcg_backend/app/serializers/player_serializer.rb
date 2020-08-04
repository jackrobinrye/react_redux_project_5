class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :gender, :characters
end
