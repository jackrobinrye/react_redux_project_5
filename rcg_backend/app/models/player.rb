class Player < ApplicationRecord
    has_many :characters
    validates :name, :age, :gender, presence: true
    validates :gender, inclusion: { in: %w(Female Male Non-binary Agender Genderfluid Genderqueer Bigender Polygender),
    message: "%{value} is not a valid gender" }
end
