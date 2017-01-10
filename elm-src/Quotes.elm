import Html exposing (Html, blockquote, cite, div, p, text)
import Html.Attributes exposing (class, id)
import Http
import Json.Decode exposing (..)


type alias Quote =
  { quote : String
  , attribution : String
  }


type alias Model =
  List Quote


type Response =
  Response (Result Http.Error Model)


main : Program Never Model Response
main =
  Html.program
    { init = init
    , view = view
    , update = update
    , subscriptions = \_ -> Sub.none
    }


init : (Model, Cmd Response)
init =
  ([], makeRequest)


modelQuote : Quote -> Html Response
modelQuote quote =
  blockquote []
    [
      p [ class "quote" ]
        [
          text quote.quote
        ]
    , cite [ class "attribution" ]
        [
              text quote.attribution
        ]
    ]


view : Model -> Html Response
view model =
  div [ id "quotes" ]
    (List.map modelQuote model)


update : Response -> Model -> (Model, Cmd Response)
update message model =
  case message of
    Response (Ok newModel) ->
      (newModel, Cmd.none)

    Response (Err _) ->
      (model, Cmd.none)


quoteDecoder : Decoder Quote
quoteDecoder =
  map2 Quote (field "quote" string) (field "attribution" string)


responseDecoder : Decoder Model
responseDecoder =
  list quoteDecoder


makeRequest : Cmd Response
makeRequest =
  let
    request = Http.get "/quotes" responseDecoder
  in
    Http.send Response request