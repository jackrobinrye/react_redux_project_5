class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :gender, :characters, :created_at
end
