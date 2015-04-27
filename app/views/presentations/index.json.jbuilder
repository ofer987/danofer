json.array!(@presentations) do |presentation|
  json.extract! presentation, :id, :name, :presented_at, :location, :filename
  json.url presentation_url(presentation, format: :json)
end
