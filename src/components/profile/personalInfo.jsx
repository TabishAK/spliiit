import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FormGroup from "@material-ui/core/FormGroup";
import { Switch } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
export default function () {
  const [showFirstLastName, setShowFirstLastName] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);
  const InputFields = ({
    showinput,
    onclose,
    onShow,
    inputs,
    text,
    value,
    isVertical,
    isToggle,
    CenterComponent,
    showSeperator,
    textBold,
  }) => {
    return (
      <div
        style={{
          alignItems: isVertical ? "flex-end" : "center",
          borderBottom: showSeperator ? "solid" : "none",
        }}
        className="inputFieldsContainer"
      >
        <p
          className="inputFieldsText"
          style={{
            margin: 0,
            fontWeight: textBold ? 700 : 400,
            color: textBold ? "black" : "-moz-initial",
            opacity: textBold ? 1 : 0.5,
          }}
        >
          {text}
        </p>
        {showinput ? (
          <span
            style={{
              display: isVertical ? "block" : "flex",
              alignItems: "center",
            }}
          >
            {inputs &&
              inputs.map((res, i) => {
                return (
                  <>
                    {res.label && (
                      <p
                        style={{
                          fontWeight: isVertical ? 700 : 400,
                          marginBottom: isVertical ? 20 : 0,
                        }}
                      >
                        {res.label}
                      </p>
                    )}
                    <input
                      name="name"
                      placeholder={res.placeholder}
                      value={res.value}
                      type={res.type}
                      style={{
                        marginRight: i !== inputs.length - 1 ? 20 : 0,
                        width: res.type !== "radio" ? 140 : 40,
                        marginBottom: isVertical ? 10 : 0,
                      }}
                      className="profileHiddenInputs"
                    />
                  </>
                );
              })}
          </span>
        ) : CenterComponent ? (
          <CenterComponent />
        ) : (
          value && <p className="preDefineValues">{value}</p>
        )}
        {isToggle ? (
          <FormGroup>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                  <AntSwitch name="checkedC" />
                </Grid>
                <Grid item>On</Grid>
              </Grid>
            </Typography>
          </FormGroup>
        ) : showinput ? (
          <div onClick={onclose} className="validateButton">
            Valid
          </div>
        ) : (
          <FontAwesomeIcon
            onClick={onShow}
            style={{ position: "initial", margin: 0, cursor: "pointer" }}
            color="black"
            icon={faChevronRight}
          />
        )}
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginBottom: "10rem",
      }}
    >
      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Profile</h3>
        <div className="profileContentImageChangeDiv">
          <p style={{ margin: 0 }}>
            The profile picture reassures other users in a group.
          </p>
          <div className="profileContentImageCircle"></div>
        </div>
        <InputFields
          showSeperator={true}
          inputs={[
            { value: "", type: "text", placeholder: "" },
            { value: "", type: "text", placeholder: "" },
          ]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="Tabish Khan"
          text="First and Last name"
        />
        <InputFields
          showSeperator={true}
          inputs={[{ value: "", type: "number", placeholder: "JJ/MM/AAAA" }]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="Add your date of birth "
          text="Date of Birth"
        />

        <InputFields
          showSeperator={true}
          inputs={[
            { value: "", type: "radio", placeholder: "", label: "Man" },
            { value: "", type: "radio", placeholder: "", label: "Woman" },
          ]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="Man"
          text="Sex"
        />
      </div>

      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Contact information</h3>

        <InputFields
          showSeperator={true}
          inputs={[{ value: "", type: "text", placeholder: "email" }]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="12ahsanali34@gmail.com"
          text="E-mail adress"
        />

        <InputFields
          showSeperator={true}
          inputs={[
            { value: "", type: "number", placeholder: "0612345678", label: "" },
          ]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="Add your phone number"
          text="Phone"
        />
      </div>

      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Security</h3>

        <InputFields
          showSeperator={true}
          isVertical={true}
          inputs={[
            {
              value: "",
              type: "password",
              placeholder: "*******",
              label: "Old password",
            },
            {
              value: "",
              type: "password",
              placeholder: "*******",
              label: "New password",
            },
            {
              value: "",
              type: "password",
              placeholder: "*******",
              label: "Confirm password",
            },
          ]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          value="********"
          text="Password"
        />
      </div>

      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Privacy</h3>

        <InputFields
          showSeperator={true}
          isToggle={true}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Receive notifications from your browser"
        />
        <InputFields
          showSeperator={true}
          isToggle={true}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Show my phone to co-subscribers"
        />

        <InputFields
          showSeperator={true}
          isToggle={true}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Show my email to co-subscribers"
        />

        <InputFields
          showSeperator={true}
          inputs={[{ value: "", type: "text", placeholder: "Username" }]}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Display a nickname"
        />
      </div>

      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Country & Language</h3>
        <InputFields
          showSeperator={true}
          CenterComponent={() => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    background: "red",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                ></div>
                United States
              </div>
            );
          }}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Country"
        />
        <InputFields
          showSeperator={true}
          CenterComponent={() => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    background: "red",
                    marginRight: 10,
                    borderRadius: "50%",
                  }}
                ></div>
                English
              </div>
            );
          }}
          onclose={() => setShowFirstLastName(false)}
          onShow={() => setShowFirstLastName(true)}
          showinput={showFirstLastName}
          text="Language"
        />
      </div>

      <div className="profileContentBodyContainer">
        <InputFields
          textBold
          showSeperator={true}
          showSeperator={false}
          onclose={() => setShowDeleteAccount(false)}
          onShow={() => setShowDeleteAccount(true)}
          showinput={showFirstLastName}
          text="Delete account"
        />

        {showDeleteAccount && (
          <div className="profileDeleteAccountDiv">
            <span>
              Deleting the account results in the termination and deletion of
              all your current subscriptions. Your information will be
              completely deleted from our database.
            </span>
            <div className="profileDeleteAccountDivWarning_subscriber">
              <div className="w_circle">!</div>
              If you wish to unsubscribe from a service, go to its management
              and click at the bottom of the page on : Unsubscribe.
              <br />
              <br />
              No refund can be made after deleting the account.
            </div>
            <div className="centerButtonArea">
              <p>Are you sure you want to delete your account ?</p>
              <a className="grayButton">Customer service</a>
              <a className="grayGreen">Confirm</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
