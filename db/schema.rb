# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_23_220421) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "instagram"
    t.string "website"
    t.string "location"
    t.string "image"
    t.text "bio"
    t.boolean "on_tour"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
  end

  create_table "designers", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "instagram"
    t.string "website"
    t.string "location"
    t.string "image"
    t.text "bio"
    t.boolean "open_to_work"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
  end

  create_table "posters", force: :cascade do |t|
    t.bigint "band_id", null: false
    t.bigint "designer_id"
    t.string "image"
    t.string "date"
    t.string "venue"
    t.string "location"
    t.integer "edition"
    t.string "status"
    t.string "duedate"
    t.string "budget"
    t.string "dimensions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["band_id"], name: "index_posters_on_band_id"
    t.index ["designer_id"], name: "index_posters_on_designer_id"
  end

  add_foreign_key "posters", "bands"
  add_foreign_key "posters", "designers"
end
