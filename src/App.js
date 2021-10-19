import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Switch from "react-bootstrap/esm/Switch";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import OfferSubcribe from "./pages/offerSubcribe";
import ChooseCountry from "./pages/chooseCountry";
import SearchPage from "./pages/searchPage";
import ChatBot from "./components/chatBot";
import Subscription from "./pages/subscriptions";
import Profile from "./components/profile";
import Sponsorship from "./pages/sponsorship";
import SubscriptionCard from "./components/subscriptionCard";
import SubscriptionDetails from "./components/SubscriptionDetails";
import Details from "./components/detail";
import Invite from "./pages/invite";
import Cagnote from "./pages/cagnote";
import ShareSubscription from "./pages/shareSubscription";
import AddSubscription from "./pages/addSubscription";
import SuggestService from "./pages/suggestService";
import Wallet from "./pages/wallet";
import SubcriptionsDetail from "./components/SubscriptionDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/offerSubscribe" component={OfferSubcribe} />
        <Route path="/countrySelect" component={ChooseCountry} />
        <Route exact path="/searchPage" component={SearchPage} />
        <Route exact path="/dashboard" component={Subscription} />
        <Route path="/sponsorship" component={Sponsorship} />
        <Route path="/personal_info" component={Profile} />
        <Route path="/payment_method" component={Profile} />
        <Route path="/card" component={SubscriptionCard} />
        <Route path="/subscriptionDetails" component={SubscriptionDetails} />
        <Route path="/details" component={Details} />
        <Route path="/invite" component={Invite} />
        <Route exact path="/shareSubscription" component={ShareSubscription} />
        <Route
          path="/sharesubScription/addSubscription"
          component={AddSubscription}
        />
        <Route
          path="/sharesubScription/suggestService"
          component={SuggestService}
        />
        <Route path="/searchPage/wallet/cagnote" component={Cagnote} />
        <Route exact path="/searchPage/wallet" component={Wallet} />
        <Route
          exact
          path="/dashboard/manageSubscription"
          component={SubcriptionsDetail}
        />
        <Route path="/dashboard/manageSubscription/invite" component={Invite} />
      </Switch>
      <ChatBot />
    </div>
  );
}

export default App;
