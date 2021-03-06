import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import JoinPostFrom from './Component';
import { joinPost } from '../../actions/posts';
import { required } from '../../util/validators';

const validate = fields => {
  const errors = {};

  const role = fields.role ? fields.role : '';
  errors.role = required(role);

  const contribution = fields.contribution ? fields.contribution : '';
  errors.contribution = required(contribution);

  return errors;
};

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  isJoining: state.posts.isJoining,
  post: state.posts.joinPostContent,
  form: state.form.joinPost
});

const mapDispatchToProps = { joinPost };

const enhance = compose(
  reduxForm({
    form: 'joinPost',
    initialValues: { role: 'Participant' },
    validate
  }),
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const JoinPostFormContainer = enhance(JoinPostFrom);

export default JoinPostFormContainer;
